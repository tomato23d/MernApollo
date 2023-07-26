import React from 'react';
import { useQuery } from '@apollo/client';

import BookList from '../components/BookList';
import { QUERY_BOOKS } from '../utils/queries';

const Home = () => {

  const { loading, data } = useQuery(QUERY_BOOKS);
  const books = data?.books || [];

  // const [searchText, setSearchText] = useState('');

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const { search } = await QUERY_SINGLE_BOOK({
  //       variables: {
  //         title,
	//         authors
  //       },
  //     });

  //     setSearchText('');
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   if (name === 'searchText' ) {
  //     setSearchText(value);     
  //   }
  // /  <SearchList books={search}
  // };

//console.log(books);

  return (
    <main>
      
      
        <form className = "new-form pl-5"  
              //  onSubmit={handleFormSubmit}
        >
              <div className="form-line">
                  <input required type = 'text'
                  name="searchText"
                  placeholder="search"
                  // value={searchText}
                  // onChange={(e) => setSearchText(e.target.value)}
                  />
              </div> 
        </form>
       

        <div className="flex-row justify-center">
              <div className="col-12 col-md-10 my-3">
              {loading ? (
                  <div>Loading...</div>
                  ) : (
                  <BookList
                  books={books}
                  title="Here are the books"
                  />
                  )}
              </div>
        </div>
    </main>
  );
};

export default Home;
