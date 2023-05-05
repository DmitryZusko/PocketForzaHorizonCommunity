import { OrderDirection } from "@/components/CarTableComponent/components/SortingTableHead/SortingTableHead";

function comparator<TEntity>(a: TEntity, b: TEntity, orderBy: keyof TEntity) {
  if (typeof a[orderBy] === "string") return stringComparator<TEntity>(a, b, orderBy);
  return numberComparator<TEntity>(a, b, orderBy);
}

function numberComparator<TEntity>(a: TEntity, b: TEntity, orderBy: keyof TEntity) {
  if (a[orderBy] > b[orderBy]) return 1;
  if (a[orderBy] < b[orderBy]) return -1;
  return 0;
}

function stringComparator<TEntity>(a: TEntity, b: TEntity, orderBy: keyof TEntity) {
  const left = a[orderBy] as string;
  const right = b[orderBy] as string;

  return left.localeCompare(right);
}

export default function sortEntities<TEntity>(
  order: OrderDirection,
  orderBy: keyof TEntity,
  entities: TEntity[],
) {
  if (order === "asc") return entities.slice().sort((a, b) => comparator<TEntity>(a, b, orderBy));
  return entities.slice().sort((a, b) => -comparator(a, b, orderBy));
}
