import { useEffect, useState, useRef } from "react";
import MainHeaderLogo from '~/assets/MainLogo.png';
import { useNavigate } from "react-router-dom";
import {
    HeaderContainer,
    HeaderLabels,
    Logo,
    NavLinks,
    AuthLinks,
    SignUpButton,
    UserDropdown,
    DropdownItem,
    UserButton,
    CartButton,
    CartIconImg
} from "./styles";
import { useAuth } from "~/hooks/useAuth";

const MainHeader = () => {
    const [solid, setSolid] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Scroll behavior
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            setSolid(currentScroll > 0);
            setVisible(currentScroll <= lastScrollY);
            setLastScrollY(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Fecha dropdown ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <HeaderContainer solid={solid} visible={visible}>
            <Logo src={MainHeaderLogo} alt="LuxDrive Logo" />

            <NavLinks>
                <HeaderLabels onClick={() => navigate("/")}>Home</HeaderLabels>
                <HeaderLabels onClick={() => navigate("/products")}>Produtos</HeaderLabels>
                <HeaderLabels onClick={() => navigate("/race")}>Corrida</HeaderLabels>
                <HeaderLabels onClick={() => navigate("/about")}>Sobre Nós</HeaderLabels>
            </NavLinks>

            <AuthLinks>
                {user ? (
                    <>
                        <CartButton onClick={() => navigate("/cart")}>
                            <CartIconImg />
                        </CartButton>

                        <div ref={dropdownRef} style={{ position: "relative" }}>
                            <UserButton onClick={() => setDropdownOpen(!dropdownOpen)}>
                                {user.name}
                            </UserButton>

                            {dropdownOpen && (
                                <UserDropdown>
                                    <DropdownItem onClick={() => { navigate("/profile"); setDropdownOpen(false); }}>
                                        Editar Perfil
                                    </DropdownItem>
                                    <DropdownItem onClick={logout}>
                                        Sair
                                    </DropdownItem>
                                </UserDropdown>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <HeaderLabels onClick={() => navigate("/login")}>Login</HeaderLabels>
                        <SignUpButton onClick={() => navigate("/signup")}>Sign Up</SignUpButton>
                    </>
                )}
            </AuthLinks>
        </HeaderContainer>
    );
}

export default MainHeader;
