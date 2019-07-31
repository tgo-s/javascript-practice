# Question

If you were responsible for architecting / building a large, data-management web application (lots of C.R.U.D. of data objects), what stack (and framework(s)) would you select and why? Assume there will be a dozen developers working on it, and its expected lifespan is a decade.

# Answer

Although the answer depends on a more detailed explanation about the kind of project, I would suggest the following 2 options of stack.

# Javascript: 
- Node.Js as server side. Why? It's cross-plataform, It has a LTS and great support from community. It is a good fit for api/microservices.
- React as front-end. Why? It's widely adopted by devs and proved be a great framework and also have great support from community. It's fast, easy to learn and fast to develop.
- PostgreSQL, MongoDB - This topic certainly depends on more specification but this would be my two options wheather the database needs to be relational or not and in both cases there are options of it on cloud. I would go with PostgreSQL on as a relational option because it's free, great for scalability and have great SQL query functions. MongoDB for non relational database because is widely used on dev community, it's open source, easy to scale, BSON format brings advatage to complex joins annd the schema-less database.
- Cloud: Amazon Aws. Why? There's a lot of solutions offered that cover all the proposed archtechture. It's easy scalable, have a great admin console that gives the user the power to config the application in detail.

# .Net
- .net core as server side. Why? It's a great framework that now is open source. Has support from a great company and a big comunity. It is stable, scalable and cross-plataform.
- React as front-end. Why? The same reasons that was mentioned on te option above.
- SQL Server, MongoDb - Also, it will depend on many factors but I'd go with one of these two options. The mongoDb as the same reasons explained above and SQL Server because of compatibility with .net core itself, the possibility of use EntityFramework Core. SQL Server as well as PostgreSQL has great SQL functions. There's also a possibility to use SQL Server Management Studio, a great tool to deal with SQL Server
- Cloud: Aws for the same reasons on the option above, Azure for compatibility with all the .net enviroment. Azure also has a great console with many options and it's easy to config and scale.




