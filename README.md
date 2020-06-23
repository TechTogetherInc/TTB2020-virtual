# TTB2020 Virtual

## Contribute Guide

### Gatsby

#### Some useful links:

1. Set up your environment: https://www.gatsbyjs.org/tutorial/part-zero/
2. Creating layout components: https://www.gatsbyjs.org/tutorial/part-three/#creating-layout-components
3. Carousel in React: https://www.npmjs.com/package/react-responsive-carousel
4. Optimized images in Gatsby (So our website will be loaded super fast!): https://www.gatsbyjs.org/packages/gatsby-image/
5. GraphQL in Gatsby: https://www.gatsbyjs.org/docs/graphql-api/

### Before working:

1. pull from master
2. create your new branch
3. do the coding
4. `git add -A`
5. `git commit -m "your commit messages"`
6. `git push origin your_branch_name`


### To test locally

1. run `gatsby develop`
2. go to your localhost:8000

### After you've done working

1. On your own branch, commit and push your code
2. Open a new pull request

### Git worktree How-To

1. In your terminal, cd to repo
2. `git worktree add -B gh-pages public origin/gh-pages`
3. git worktree is set up!

#### To deploy more code in the future

1. do the code
2. git push etc -- push your stuff first
3. `gatsby build` -- this builds into the public folder
4. `cd public` -- this will direct you to gh-pages
5. git add -A, git commit -m "your commit messages", git push etc -- push your changes
