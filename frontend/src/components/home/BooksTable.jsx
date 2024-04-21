import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

function BooksTable(props) {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">Title</th>
          <th className="border border-slate-600 rounded-md max-sm:hidden">Author</th>
          <th className="border border-slate-600 rounded-md max-sm:hidden">
            Publish Year
          </th>
          <th className="border border-slate-600 rounded-md">Operations</th>
        </tr>
      </thead>
      <tbody>
        {props.books.map((item, index) => (
          <tr key={item._id} className='h-8'>
            <td className="border border-slate-700 rounded-md text-center">
              {index + 1}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {item.title}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-sm:hidden">
              {item.author}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-sm:hidden">
              {item.publishYear}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/books/details/${item._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/books/edit/${item._id}`}>
                  <AiOutlineEdit className='text-2xl text-green-800' />
                </Link>
                <Link to={`/books/delete/${item._id}`}>
                  <MdOutlineDelete className='text-2xl text-green-800' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default BooksTable