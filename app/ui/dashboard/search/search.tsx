import React from 'react';
import { FaSearch } from "react-icons/fa";
import styles from "./search.module.css";

interface Props {
  placeholder: string;
}

const Search: React.FC<Props> = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <FaSearch />
      <input type="text" placeholder={placeholder} className={styles.input}/>
    </div>
  );
}

export default Search;
