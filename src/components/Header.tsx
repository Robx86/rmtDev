import BookmarksButton from "./BookmarksButton";
import Logo from "./Logo";
import SearchForm from "./SearchForm";

export default function Header({ searchText, onSearchTextChange }) {
  return (
    <header className="header">
      <div className="header__top">
        <Logo />
        <BookmarksButton />
      </div>
      <SearchForm
        searchText={searchText}
        onSearchTextChange={onSearchTextChange}
      />
    </header>
  );
}
