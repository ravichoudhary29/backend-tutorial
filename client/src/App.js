import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookTable from './components/BookTable';
import AddBook from './components/AddBook'; // Component for adding a book
import EditBook from './components/EditBook'; // Component for editing a book
import ViewBook from './components/ViewBook'; // Component for viewing a book

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={BookTable} />
        <Route path="/add" component={AddBook} />
        <Route path="/edit/:id" component={EditBook} />
        <Route path="/book/:id" component={ViewBook} />
      </Switch>
    </Router>
  );
};

export default App;
