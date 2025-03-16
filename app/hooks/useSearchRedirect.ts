import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useSearchRedirect = (searchInput: string) => {
  const router = useRouter();

  useEffect(() => {
    const handleSearch = () => {
      if (searchInput.trim()) {
        router.push(`/search/?q=${encodeURIComponent(searchInput.trim())}`);
      }
    };
    handleSearch();
  }, [searchInput, router]);
};

export default useSearchRedirect;
