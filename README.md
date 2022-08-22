## Goodpluck.com

This is a Gatsby App. Product Data comes from Airtable. Ity connects to teh [backend application](https://github.com/cheningD/goodpluck_cf_worker)

## Process for making a change (creating a PR) [draft]

We use rebase git flow. (See https://www.benmarshall.me/git-rebase/)

[ ] Make sure master is up to date `git checkout master && git pull`
[ ] Create a feature branch `git checkout -b`
[ ] Make changes
[ ] Commit using "Fixes #issue-number" syntax `git commit -m "Fixes #33 - No more spiders"`
[ ] Push em, and ask for a review

## Deploying

Once your change is in master you can trigger a deploy by rebasing master onto the live/master or the staging/master branch. Github will automatically deploy pushes to those branches.  
[ ] Update master `git checkout master && git pull origin master`  
[ ] Update live/master `git checkout live/master && git rebase master`  
[ ] Deploy `git push`

1. To deploy to staging (staging.goodpluck.com): `git push staging/<branch-name>`
2. To Deploy to production (goodpluck.com): `git push live/<branch-name>`

## Acceptance test

- Before & after deploying to production please confrim the following works:
- Create a bug on github issues for any failures.
- Rollback deployment if issue is fatal

### 1. Logged out state

[ ] Helpful chat bubble shows up in bottom righthand corner of screen
[ ] Sign in with invalid email is prevented  
[ ] Sign in with fake email returns user not found  
[ ] `/basket`, `/myaccount`, and `/market` pages ask you to sign in.  
[ ] Create an account flow using `<youremail>+test@goodpluck.com`. Everything looks ok.  
[ ] Checkout page has correct basket dates (this week if it is before thursdsay, next week if it's after thursday)
[ ] Checkout page has correct order frequency

### 2. Logged in state

[ ] My account: Dates are correct  
[ ] My account: Delivery frequency is correct  
[ ] My account > Manage: I can stop my subsription  
[ ] My account > Manage: I can restart my subscription

[ ] My Basket: Items match what was in the Local Pluck  
[ ] My Basket: Items have images  
[ ] My Basket: I can increase item quantity and price updates  
[ ] My Basket: I can remove items  
[ ] My Basket: If I go below $30 A $6.99 shiopping fee is added

[ ] The Market: I can add an item, remove an item and change it's quantity  
[ ] The Market: The basket item in the top right updates  
[ ] The Market: I can use the sidebar to navigate  
[ ] The Market: Note down any inconsistencies with items being sold

### 3. Cleaning Up

- Pause your subscription
- logout

[ ] Try to 'Get Started' with the exact same email. It should tell you to sign in
