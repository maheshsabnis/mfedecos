# Crete a workspace
1. Angular Workspace
    - MF App(s)
        - COnfigure Module Federation 
            - Expose the Module
    - Shell
        - COfigure Module Federation
            - Remote accessed to the exposed Module

# Walkthirugh
- Creating Workspace
ng new customer-mf --create-application false --skip-tests     

- Lets add an app

 ng g app customer-mfe --skip-tests --routing

 - Lets add component in app

  ng g c components/home --project customer-mfe

- Lets add a new Modue

ng g module --project customer-mfe --routing customer

- add a new component in customer module
ng g c --project customer-mfe --module customer customer/components/CustomersList
 
- Follow Same command for creating other MF like Order-MFE, Product-MFE etc.

# Shell Project (Follow Same commands as like Customer-MFE)
- This will a hosting app that will load the Angular App as a MFE App
    - Create and confgure the Shell Project as 'THE HOST'(?)
    - Configure the Angular App as 'THE FRONT-END-MODULE'(?)

- Creating Shell Project
ng new ecomm-host --create-application false --skip-tests


# Installing the Angular Module Federation
    - The Process varies based on the Workspace
    - For Angular Workspace
        - ng add @angular-architets/module-federation --type [FDERATION-TYPE-FOR-APP] --project [NAME-OF-THE-APP] --port [PORT]
            - FDERATION-TYPE-FOR-APP: host, the configuration will be generared for HOST to take care of loading dependencies, application and exposing the the Shell  for deploymeht 
            - FDERATION-TYPE-FOR-APP: remote
    - ng add @angular-architects/module-federation --type remote --project customer-mfe --port 4200

    - ng add @angular-architects/module-federation --type host --project ecomm-host --port 5200

        


