---
title: 'Unlocker'
sidebar_position: 4
---

The unlocker is a service coming as a binary that lets you automatically unlock your running daemon once it is initialized.

This service sources the unlocking password from one of the supported providers. It's possible to select the preferred provider with the flag `--provider providerType`.  
Following is the list of supported `providerType`s:

- [file](#unlock-with-file) to source from local file
- `aws` to source from AWS KMS service (Coming soon)
- `vault` to source from Hashicorp Vault (Coming soon)
- `k8s` to source from Kubernetes (Coming soon)

Along with the password, these providers also provide a way to possibly source a TLS certificate (generated by the daemon) in case the communication needs to be encrypted.

You can see the full list of supported flags anytime with

```bash
$ unlockerd --help
```

## Unlock with file

The file provider is the default one used by the unlocker. 

It requires you to specify a path of the file containing the password in plaintext to use for unlocking the daemon with the flag `--password_path`.

By default, this provider also assumes that the daemon's datadir has not been customized, therefore it looks within its default datadir path to possibly load the TLS certificate created by the daemon needed by the unlocker to establish a secure connection.  
Anyways, it's possible to specify the path of the TLS certificate with the flag `--tls_cert_path` if you have it somewhere else.  
In case the daemon is running in *no macaroons* mode, this provider shouldn't find any certificate in the daemon's datadir, signaling the unlocker that no TLS termination is required. 

Example:

```bash
# create the pwd file
$ echo "mysecretpassword" > pwd.txt

# start unlockerd with given password file and default TLS cert path
$ unlockerd --password_path pwd.txt

# start unlockerd with given password and TLS certificate
$ unlockerd --password_path pwd.txt --tls_cert_path ~/path/to/cert.pem
```