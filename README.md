# First Angular App
First Angular Application to prototype few variants

## Quick Start
1. https://v4.angular.io/guide/quickstart </br>
Till Step 3, your dev environment will be setup. Few observations:
    - SYSTEM Environment variables are set for node and npm
    - USER Environment variables are set for ng (angular cli)
    - Can be checked through command 'where ng'
2. Explaining the flow:
    - index.html is the first page of our web-application
    - The tag &lt;app-root> triggers the app component to kick in. It will get replaced with the app.component.html and its model is in app.component.ts
    - The linking is working through the use of decorator (to mark it as Angular component) in app.component.ts which has selector as "app-root"
    - And this is what makes it as single page application