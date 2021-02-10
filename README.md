## Goodpluck frontend

This repo is basede on the gatsby hello world starter

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

[ ] Try to 'Get Started' with the exact same email. It should tell you to sign in.

## Deploying

Deployed automatically with github actions.

1. To deploy to staging (staging.goodpluck.com): `git push staging/<branch-name>`
2. To Deploy to production (goodpluck.com): `git push live/<branch-name>`

Deploy: 2021-02-08
