"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Search } from "lucide-react";

function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
}

function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [type, setType] = useState(searchParams.get("type") || "casino");
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("searchTerm") || ""
  );

  const updateQueryParams = useCallback(
    (newParams: { type?: string; searchTerm?: string }) => {
      const params = new URLSearchParams(searchParams.toString());

      if (newParams.type) {
        params.set("type", newParams.type);
      } else {
        params.delete("type");
      }

      if (newParams.searchTerm) {
        params.set("searchTerm", newParams.searchTerm);
      } else {
        params.delete("searchTerm");
      }

      router.push(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  const debouncedUpdateQueryParams = useMemo(() => {
    return debounce((searchTerm: string) => {
      updateQueryParams({ searchTerm, type });
    }, 500);
  }, [type, updateQueryParams]);

  const handleTypeChange = (value: string) => {
    setType(value);
    updateQueryParams({ type: value, searchTerm });
  };

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedUpdateQueryParams(value);
  };

  useEffect(() => {
    setType(searchParams.get("type") || "");
    setSearchTerm(searchParams.get("searchTerm") || "");
  }, [searchParams]);

  return (
    <div className="flex flex-row gap-4 w-full">
      <Select value={type} onValueChange={handleTypeChange}>
        <SelectTrigger className="w-25 !h-10 rounded-md bg-sidebar">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="casino">Casino</SelectItem>
          <SelectItem value="sports">Sports</SelectItem>
        </SelectContent>
      </Select>
      <Input
        className="!h-10 rounded-md bg-sidebar w-full"
        prefix={<Search className="text-muted-foreground" />}
        value={searchTerm}
        onChange={handleSearchTermChange}
        placeholder="Search your game"
      />
    </div>
  );
}

export default SearchBar;
