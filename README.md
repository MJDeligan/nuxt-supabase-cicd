# Nuxt3 + Supabase + Prisma + Github Workflows

<p align="center">
  <a href="https://v3.nuxtjs.org/">
    <img src="https://skillicons.dev/icons?i=nuxt" />
    &nbsp;&nbsp;
  </a>
  <a href="https://supabase.com/">
    <img src="https://skillicons.dev/icons?i=supabase" />
    &nbsp;&nbsp;
  </a>
  <a href="https://www.prisma.io/">
    <img src="https://skillicons.dev/icons?i=prisma" />
    &nbsp;&nbsp;
  </a>
  <a href="https://github.com/features/actions">
    <img src="https://skillicons.dev/icons?i=github" />
  </a>
</p>

This is a demo project combining the above mentioned Technologies into a Stack to create a small Web Application. I'll be using a lot of the features offered by [Nuxt 3](https://v3.nuxtjs.org/), [Supabase](https://supabase.com/) and [Prisma](https://www.prisma.io/) and setup [workflows](https://github.com/features/actions) for the repo to garantee smooth development.

The focus of this project will be on the CI/CD, using all the options given by Prisma and Supabase and combining them with the power of Github Actions.
___

## CI/CD

[![My Skills](https://skillicons.dev/icons?i=vite)](https://vitejs.dev)
&nbsp;&nbsp;
[![My Skills](https://skillicons.dev/icons?i=github)](https://github.com)

An important part of any application is Continuous integration and deployment. We want to spend as little time as possible manually resolving conflicts :zap: and deploying changes. We also don't want to rely on ourselves to spot errors :x: in code reviews or running linters, unit, integration and e2e tests every time.

**Luckily the technologies used in this project provide handy features that make CI/CD a breeze.**

## Continuous Integration

We can leverage the power of Github Actions/Workflows to decrease the need for manual intervention when pushing/merging changes.

From past projects I know that while Supabase allows for fast development, this can lead to problems down the road. If features aren't developed locally and instead on the production Supabase instance, conflicts very quickly arise when developing in parallel with others. A common example would be a feature requiring the addition of a column in a table. When trying to query that table another developer may be getting errors because their code doesn't handle this new column yet.

Supabase allows local development through their CI using Docker to spin up a local desktop. This way developers can work on their individual features without interfering with each other. This however brings a new challenge: **Merging backend changes**.

This is where we can leverage migrations. Specifically Prisma's migrations. While Supabase offers its own migrations, I am using Prisma anyways and the process of creating and applying migrations is easier this way. The migrations can easily be merged with others and then be applied to the local supabase instance to synchronize.

Of course we only want to merge high quality code and we want to rely on developers finding every single mistake as little as possible. We can use Github Actions that run on all pull requests in order to lint and test our code. This way we are automatically notified if the changes in the pull request aren't up to our standards.

## Continuous Deployment

While CI is important it doesn't actually ship any product to costumers. Everything happens within our production environment. When we push to the main branch we want to automatically deploy our changes to all production environment. In this example there are 2 separate environments to which we have to deploy: **Supabase and our Nuxt application host**.

Most of the time, when developing small to mid size projects, changes to Supabase and Nuxt are synchronized, since people are working on both for their features. In order to assure that the necessary changes are also deployed to both, we deploy them using a Github Action that runs when changes are pushed to main. This way, we do not risk someone forgetting to deploy changes to one production environment and breaking the application. It also allows us to run e2e tests to ensure that the application we deploy works and fulfills its requirements.

From past projects I know that while Supabase allows for fast development, this can lead to problems down the road. If features aren't developed locally and instead on the production Supabase instance, conflicts very quickly arise when developing in parallel with others. A common example would be a feature requiring the addition of a column in a table. When trying to query that table another developer may be getting errors because their code doesn't handle this new column yet.

At this point, the application doesn't do really do anything. Since this is more about the CI/CD I develop a couple of features to test the CI/CD process, but ultimately there is no point to this application other than to show off the integration between the technologies and how that integration can be reasonably handled with CI/CD processes.

## Drawbacks

### Rollbacks

One of the problems that might arise is that one of the deploys succeeds, but the other one doesn't. We might successfully deploy our migrations to Supabase, but our Vercel deployment fails. This results in a version mismatch between frontend and backend. We would thus need to roll back the migrations applied to Supabase in order to realign the releases. Vercel succeeding and Supabase failing is of course also a possibility and would require us to roll back changes to the application deployed on Vercel.

With the way that down migrations currently work with Prisma, rolling back the migrations in case the Vercel deployment fails is not an easy process.