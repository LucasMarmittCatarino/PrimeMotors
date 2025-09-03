import { useEffect, useState } from "react";
import {
    HeaderContainer,
    HeaderLabels
} from "./styles";

const MainHeader = () => {
    const [solid, setSolid] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const currentScroll = window.scrollY;

        setSolid(currentScroll > 0);

        if (currentScroll > lastScrollY) {
            setVisible(false);
        } else {
            setVisible(true);
        }

        setLastScrollY(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <HeaderContainer solid={solid} visible={visible}>
            <HeaderLabels>Racing</HeaderLabels>
            <HeaderLabels>Sport Cars</HeaderLabels>
            <HeaderLabels>Collections</HeaderLabels>
            <HeaderLabels>Experiences</HeaderLabels>
        </HeaderContainer>
    );
}

export default MainHeader