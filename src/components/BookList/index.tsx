import { CardWithoutDescription } from '@/components/CardWithoutDescription'
import { useStore } from '@/zustand-store'

export function BookList() {
  const { books } = useStore((store) => {
    return {
      books: store.books
    }
  })

  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {books &&
        books?.map((book) => {
          return <CardWithoutDescription key={book.id} data={book} />
        })}
    </div>
  )
}
