# SQL compatibility table

I created this documentation because I was often asking myself:

Is it possible to directly write SQL queries that work on all major databases without an ORM?  
Like one "universal" SQL language understood by everybody.

The answer is yes... if you restrict yourself to the common keywords compatible across database systems.  
Actually the SQL language is standardized but unfortunately these standards are not always respected by database vendors.

So after seeing the [ECMAScript compatibility table](https://kangax.github.io/compat-table) for JavaScript I decided to create the same thing for the SQL language.

The goal of this project is to have enough information with these compatibility tables to write an universal SQL reference manual for all developers who want to write agnostic SQL query.

## Online documentation

You can access to the SQL compatibility table on this GitHub static website:  
https://nils85.github.io/sql-compat-table

## Offline documentation

You can [download the ZIP archive](https://github.com/Nils85/nils85.github.io/archive/main.zip) that include all HTML pages to access it offline.  
Or you can also run `git clone https://github.com/Nils85/nils85.github.io.git`

## Report a mistake / improve this documentation

If you find a mistake or want to add new elements in a table you have two possibilities:

- Open an issue
- Create a pull request

## Open source license

This documentation is distributed under [Creative Commons Zero v1.0 Universal](LICENSE.txt) (CC0-1.0 License).  
Feel free to do whatever you want with it!