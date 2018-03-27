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
3. More changes done as per https://angular.io/tutorial/toh-pt1:
    - Adding &lt;app-heroes> won't work if added in index.html as it's not a bootstrap module which has been referenced through main.ts [TODO: confirm this] Even adding it to list of bootstrap in app.module.ts didn't help
    - Two way binding can be validated by modifying the text in input field