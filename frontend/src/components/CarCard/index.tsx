// CardCard.tsx
import React from "react";
import { CardWrapper, CardImage, CardInfo, AdminButtons } from "./styles";

interface CardCardProps {
  img: string;
  carName: string;
  price: string;
  onClick?: () => void;
  isAdmin?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  deleteDisabled?: boolean;
}

const CardCard: React.FC<CardCardProps> = ({
  img,
  carName,
  price,
  onClick,
  isAdmin,
  onEdit,
  onDelete,
  deleteDisabled,
}) => {
  return (
    <CardWrapper onClick={onClick}>
      <CardImage src={img} alt={carName} />
      <CardInfo>
        <h3>{carName}</h3>
        <p>{price}</p>
      </CardInfo>

      {isAdmin && (
        <AdminButtons>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit?.();
            }}
          >
            Editar
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (!deleteDisabled) onDelete?.();
            }}
            disabled={deleteDisabled}
            style={{ opacity: deleteDisabled ? 0.6 : 1 }}
          >
            {deleteDisabled ? "Excluindo..." : "Excluir"}
          </button>
        </AdminButtons>
      )}
    </CardWrapper>
  );
};

export default CardCard;
