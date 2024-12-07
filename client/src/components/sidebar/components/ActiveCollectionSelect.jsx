import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  getCollectionsOptions,
  setActiveCollection,
} from "@/services/collections";
import QueryError from "@/components/Errors/QueryError";
import { useAuth } from "@/hooks/authProvider";
import { useEffect } from "react";
const ActiveCollectionSelect = () => {
  const { activeCollection, setActiveCollection: setActiveCol } = useAuth();
  const queryClient = useQueryClient();
  const {
    data: collectionsOptions,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["collectionsOptions"],
    queryFn: async () => {
      return await getCollectionsOptions();
    },
  });
  const setActiveMutation = useMutation({
    mutationKey: ["collectionsOptions"],
    mutationFn: async (collection_id) => {
      return await setActiveCollection(collection_id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("collectionsOptions");
    },
  });
  useEffect(() => {
    const activeCol = collectionsOptions?.find((col) => col.is_active);
    if (activeCol) {
      setActiveCol(activeCol);
    } else {
      setActiveCol(null);
    }
  }, [collectionsOptions, setActiveCol]);
  return (
    <>
      <div className="tw-w-40">
        {!isLoading && !isError && (
          <Select
            value={activeCollection?.value || null}
            onValueChange={(value) => setActiveMutation.mutate(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Collection" />
            </SelectTrigger>
            <SelectContent>
              {collectionsOptions.length > 0 &&
                collectionsOptions.map((option) => {
                  return (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
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
