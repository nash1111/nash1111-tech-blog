npm create cloudflare@latest nash1111-tech-blog -- --framework=remix

using create-cloudflare version 2.20.1

╭ Create an application with Cloudflare Step 1 of 3
│
├ In which directory do you want to create your application?
│ dir ./nash1111-tech-blog
│
├ What type of application do you want to create?
│ type Website or web app
│
├ Which development framework do you want to use?
│ framework Remix
│
├ Continue with Remix via `npx create-remix@2.8.1 nash1111-tech-blog --template https://github.com/remix-run/remix/tree/main/templates/cloudflare`
│


 remix   v2.8.1 💿 Let's build a better website...
      ◼  Directory: Using nash1111-tech-blog as project directory

      ◼  Template: Using https://github.com/remix-run/remix/tree/main/templates/cloudflare...
      ✔  Template copied

   git   Initialize a new git repository?
         Yes

  deps   Install dependencies with npm?
         No
      ◼  Skipping install step. Remember to install dependencies after setup with npm install.

      ✔  Git initialized

  done   That's it!

         Enter your project directory using cd ./nash1111-tech-blog
         Check out README.md for development and deploy instructions.

         Join the community at https://rmx.as/discord


├ Copying template files
│ files copied to project directory
│
├ Installing dependencies
│ installed via `npm install`
│
╰ Application created

╭ Configuring your application for Cloudflare Step 2 of 3
│
├ Installing @cloudflare/workers-types
│ installed via npm
│
├ Adding latest types to `tsconfig.json`
│ added @cloudflare/workers-types/2023-07-01
│
├ Retrieving current workerd compatibility date
│ compatibility date 2024-04-05
│
├ Updating `load-context.ts`
│ updated `load-context.ts`
│
├ Adding Wrangler files to the .gitignore file
│ updated .gitignore file
│
├ Updating `package.json` scripts
│ updated `package.json`
│
├ Committing new files
│ git commit
│
╰ Application configured

╭ Deploy with Cloudflare Step 3 of 3
│
├ Do you want to deploy your application?
│ no deploy via `npm run deploy`
│
├  APPLICATION CREATED  Deploy your application with npm run deploy
│
│ Navigate to the new directory cd nash1111-tech-blog
│ Run the development server npm run dev
│ Preview your application npm run preview
│ Deploy your application npm run deploy
│ Read the documentation https://developers.cloudflare.com/pages
│ Stuck? Join us at https://discord.gg/cloudflaredev
│
╰ See you again soon!