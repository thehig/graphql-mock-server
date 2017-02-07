// const schema = `
// type Author {
//   id: Int! # the ! means that every author object _must_ have an id
//   firstName: String
//   lastName: String
//   posts: [Post] # the list of Posts by this author
// }

// type Post {
//   id: Int!
//   title: String
//   author: Author
//   votes: Int
// }

// # the schema allows the following query:
// type Query {
//   posts: [Post]
// }

// # this schema allows the following mutation:
// type Mutation {
//   upvotePost (
//     postId: Int!
//   ): Post
// }

// # we need to tell the server which types represent the root query
// # and root mutation types. We call them RootQuery and RootMutation by convention.
// schema {
//   query: Query
//   mutation: Mutation
// }
// `;

const schema = `
type MasterCategory {
  id: Int!
  name: String!
  image: String!
  children: [Category]
}

type Category {
  id: Int!
  name: String!
  image: String!
  children: [Category]
  products: [Product]
}

type Product {
  id: Int!
  name: String!
  image: String!
}

type Query {
  MasterCategories: MasterCategory
  Categories: Category
  Products: Product
}

schema {
  query: Query
}
`;

export default schema;