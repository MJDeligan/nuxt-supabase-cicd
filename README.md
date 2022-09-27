# Nuxt3 + Supabase + Prisma + Github Workflows


This is a demo project combining the above mentioned Technologies into a Stack to create a small Web Application. I'll be using a lot of the features offered by Nuxt 3, Supabase and Prisma and setup workflows for the repo to garantee smooth development.
___
## What does this include?

### Nuxt 3

I will be using the basic Nuxt 3 features (Vue components, directory-based routing, ssr). In addition I will be using the newly introduced server endpoints to act as my API.

### Prisma

Prisma will be used as the ORM on the backend as well as to create the database migrations.

### Supabase

Supabase will be the database host and auth-middleman. I'll be using it to signup, authenticate and authorize users.

### Github Workflows

With Github Workflows I'll make sure that the code that makes it to production is verified. It will also take care of applying the needed changes to the production environment as needed.

## The application

The application will be a simple messenger-type app. Authenticated users will be able to add messages. Anyone can see the messages of the last ten minutes. The messages will be updated in realtime, no need for refreshs.

## Setup

Create a new Supabase project on the supabase website.

### Nuxt
1. Run `npx nuxi init chat-app` in the command line.
2. Run `cd chat-app`.
3. Run `npm i`.
