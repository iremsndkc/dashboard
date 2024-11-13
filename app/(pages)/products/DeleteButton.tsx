"use client";

import { deleteProduct } from "@/utils/api";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteButton = ({ id }: { id: number }) => {
  const router = useRouter();
  const handleDelete = () => {
    deleteProduct(id)
      // silme işlemi başarılı olunca
      .then(() => {
        // sayfayı yenile (ürünler tekrar alınsın)
        router.refresh();

        // bildirim gönder
        toast.success("Ürün kaldırıldı!");
      });
  };
  return (
    <button
      onClick={handleDelete}
      className="px-3 py-1 bg-[#f3a5a5] hover:bg-[#f15e5e]  
rounded-md transition"
    >
      Sil
    </button>
  );
};

export default DeleteButton;
