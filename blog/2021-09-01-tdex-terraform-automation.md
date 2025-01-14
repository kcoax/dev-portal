---
slug: tdex-terraform-deploy
title: Deploy a TDEX Daemon to AWS with Terraform
author: Alexander K
author_title: TDEX Contributor
tags: [terraform, automation, tdex, deploy]
---

Configure and run TDex box easily using Terraform automation. 

<!--truncate-->

### Create user and obtain AWS Keys

As a first step it is required to obtain AWS access and secret keys. Best practice is to create new user in AWS IAM. 
Please navigate to Services > IAM page > Add user. 
Proceed with opening AWS IAM users page, and click on Add user. Provide user with name, and below, for the Access type select Programmatic access. ![Add User](../static/img/add-user.png)
Next, make sure that your AWS account(access key) has all required privileges to create EC2 instances and S3 access.
Permissions you need (EC2 full, S3 full, VPC access)
![Attach permissions](../static/img/attach-perms.png)

Once you add Permissions and Tags, click Create user. That will bring you to latest page provided with AWS Access and Secret Keys. 
Copy your keys to safe place and do not share it with anyone.
![Attach permissions](../static/img/user-keys.png)

Check the documentation [here](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html)

- - - - - 
### Install Terraform

Next step is to install Terraform on your machine.
The easiest way is to follow its documentation [here](https://www.terraform.io/docs/cli/install/apt.html) 
Or follow this installation for APT Packages for Debian and Ubuntu.
```sh
$ curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
$ sudo apt-add-repository "deb [arch=$(dpkg --print-architecture)] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
$ sudo apt install terraform
```
- - - - - 
### Proceed with cloning and deploy
Clone the TDex Box repository and enter its directory. 
```sh
git clone https://github.com/tdex-network/tdex-box.git
cd tdex-box
```
- - - - - 

On the AWS AMI Marketplace, find Ubuntu 20.04 public AMI, accessible in the region you are planing to deploy service and copy it's AMI ID. 


Once you have everything in place, just execute deploy.sh and it will prompt you for all the parameters in order provided above. 
Since it is good practice to have backup enabled, please provide S3 bucket name when deploying. 
Please enter parameters carefully. 

**Make sure you copy IP address after deploy is finished.**

That is your tdex endpoint IP, and it can be accessed over port 9000
```sh
$ cd terabox/
$ chmod +x deploy.sh
$ ./deploy.sh
```
![Deploy](../static/img/deploy.png)

### TOR 

Executing deploy.sh, you can setup your service behind TOR too. 
You can provide your public Onion key, or if left empty, service will generate it for you. 
If generated by TOR service, we advice you to check your TOR onion public key and register it.

Connect to your Linux box over SSH and get onion key.
```sh
$ ssh -i ~/.ssh/key_location ubuntu@your.tdex.host.ip
$ docker exec tor onions

```

Once you have your Onion public key, please follow [this](https://dev.tdex.network/docs/provider/registry) tutorial on how to register your Onion endpoint in the [public TDEX registry ](https://github.com/TDex-network/tdex-registry)



### Install and use TDEX-CLI

TDEX is a CLI (GRPC client), that can be used to interact with remote TDEX-deamon endpoint. 
We need to init/configure tdex-cli, which is way of authenticating to remote running deamon. 
When configuring service, we need to provide several things:
 - tls_cert_path
 - macaroons_path
 - rpcserver (this will be IP of machine where tdex-box is deployed)

To install Tdex CLI you need to run **getCli.sh** located in scripts folder. If installed successfully tdex-cli will print help menu.

```sh
$ chmod +x terabox/scripts/getCli.sh
$ sudo ./terabox/scripts/getCli.sh
```

Once you have installed TDEX CLI, you would need to download TLS and Macaroons from your tdexd host machine in order to connect remotely. This command will download whole gated/ folder which is copy of your container deamon. 
```sh
$  scp -r user@your.tdex.host.ip:/path/to/tdexd/ .
```

Proceed with configuring tdex-cli with downloaded macaroons and cert, and add your remote endpoint IP. 
 - cert.pem is located at $HOME/tdex-box/gated/tls/cert.pem on the remote machine
 - admin.macaroon is located at $HOME/tdex-box/gated/macaroons/admin.macaroon on the remote machine
```sh
# By default it looks for the daemon operator gRPC interface on localhost:9000
# or on a remote machine
$ tdex config init --rpcserver=tdex.remote.host.ip:9000 --tls_cert_path=./cert.pem --macaroons_path=./admin.macaroon
##### OR you can use config to set your values
$ tdex config
$ tdex config set tls_cert_path ./cert.pem
$ tdex config set macaroons_path ./admin.macaroon
$ tdex config set rpcserver tdex.remote.host.ip 


After those are set, you can test tdex-deamon
$ tdex listmarket
$ tdex help   <-- for more information and commands
```
For more information [how to configure and use the TDEX CLI](https://dev.tdex.network/docs/provider/daemon/getting_started/configure_cli)
### Deposit funds
**Done!** Now you are ready to [deposit funds](https://dev.tdex.network/docs/provider/daemon/deposit_funds) to open a market and earn swap fees.
