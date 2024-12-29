import { useQuery } from "@tanstack/react-query";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  getCollectionsOptions,
} from "@/services/collections";
import QueryError from "@/components/Errors/QueryError";
import { useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
const ActiveCollectionSelect = () => {
  const [activeCollection, setActiveCollection] = useLocalStorage("activeCollection", null);
  const {
    data: collectionsOptions,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["collectionsOptions"],
    queryFn: async () => {
      const res = await getCollectionsOptions();
      return res.data?.collections?.map(c => ({ value: c?.collection_id, label: c?.collection_name })) || []
    },
  });
  useEffect(() => {
    if (!activeCollection && collectionsOptions?.[0]?.value) {
      setActiveCollection(collectionsOptions?.[0]?.value || null);
    }
  }, [collectionsOptions, activeCollection]);
  return (
    <>
      <div className="tw-w-40">
        {!isLoading && !isError && (
          <Select
            value={activeCollection}
            onValueChange={(value) => setActiveCollection(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Collection" />
            </SelectTrigger>
            <SelectContent>
              {collectionsOptions?.length > 0 &&
                collectionsOptions?.map((option) => {
                  return (
                    <SelectItem key={option?.value} value={option?.value}>
                      {option?.label}
                    </SelectItem>
                  );
                })}
            </SelectContent>
          </Select>
        )}
        {!isLoading && isError && <QueryError error={error} />}
        {isLoading && <div className="">fetching collections...</div>}
      </div>
    </>
  );
};

export default ActiveCollectionSelect;
