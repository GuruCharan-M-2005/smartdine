import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  const visiblePages = pages.filter((page) => {
    if (totalPages <= 5) return true;
    if (page === 1 || page === totalPages) return true;
    if (Math.abs(page - currentPage) <= 1) return true;
    return false;
  });

  const renderPageNumbers = () => {
    const elements: React.ReactNode[] = [];
    let lastPage = 0;

    visiblePages.forEach((page) => {
      if (lastPage && page - lastPage > 1) {
        elements.push(
          <span key={`ellipsis-${page}`} className="px-2 text-muted-foreground">
            ...
          </span>
        );
      }
      elements.push(
        <Button
          key={page}
          variant={currentPage === page ? "default" : "ghost"}
          size="sm"
          onClick={() => onPageChange(page)}
          className={currentPage === page ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}
        >
          {page}
        </Button>
      );
      lastPage = page;
    });

    return elements;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-muted-foreground hover:text-foreground disabled:opacity-50"
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      {renderPageNumbers()}

      <Button
        variant="ghost"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-muted-foreground hover:text-foreground disabled:opacity-50"
      >
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Pagination;
