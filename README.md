# MernApollo

## Outstanding issues


### expected behaviour #2: on successful login the Header component to 
#### require assistance
publish {user.username} - actual behaviour: publishes the static text for example, "Welcome";

applied useParams() but prints as undentified


### expected behaviour #3:

when button "Save to Wishlist" is clicked, the book to be saved into savedBooks array on User model

no tests as yet

### expected behaviour #4:

when button "Remove" (from Wishlist) is clicked, the book to be removed from the savedBooks array on User model

no tests as yet

### expected behaviour #5:
#### require assistance

Book Detail button on single book loads the single book detail page in the new window /books/:_id

tests:
graphql: OK
query Books {
  books {
    bookId
    _id
  }
}

http://localhost:3000/books/64b4e02125e86c8c7837a5c8  : returns blank page

parent page http://localhost:3000/me : need to separate button from BookDetail  
