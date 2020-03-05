# Java Oracle Application to PostgreSQL Migration 



## Scenario Overview
Contoso Tech specializes in providing leading edge training and technical evangelism.  They host multiple conferences around the world containing packed audiences.  The website used for promoting the conferences, marketing session tracks, and registering attendees has been in production for several years.  

Contoso has been modernizing their infrastructure and the operations team would like to move this application from on-premise to the cloud as it is one of the last applications in their shrinking datacenter.  The development team has made great improvements to the web and API stack preparing for this event.  However, there is a reluctance to modernize or change the database feeding the web site due to the amount objects layered on over the years.  A lot has changed in the database marketplace since this application was originally developed and there might be new database options to consider.

Management has heard about the benefits of the PostgreSQL database:

- High performance and scalability.
- Popular programming languages have a PostgreSQL provider.
- It can store many of the data types required by applications.
- It has an open-source licensing model.

Steps required to migrate to this database platform need to be explored by the development team.  

The development team is motivated, but has communicated firmly migration is not as easy as changing a connection string in the application configuration.  PostgreSQL has very similar capabilities to the existing Oracle database, but special considerations would be required for database objects that did not convert transparently.  Downtime, functionality degradation, and loss of data are biggest risks for this project.  The development team has been given the task of documenting the migration and risk mitigation plan.

The web application consists of an Angular frontend, Java Spring Maven web API, and an Oracle database.

This guide will cover the migration path for hosting an existing Java Spring Oracle application in Azure utilizing App Services and managed PostgreSQL PaaS service.  The topics of application scaling and containerization are important, but will not be covered as the focus of this guide are the challenges of database migration.
