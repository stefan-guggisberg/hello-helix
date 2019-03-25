## WARNING

This directory contains the secrets which must not be checked into git w/o encryption.

We use [blackbox](https://github.com/StackExchange/blackbox) to encrypt the files before
committing.

**Note**: You need to be in the list of admins in order to be able to decrypt the files.
More specifically, the secret files need to be encrypted with your public key, so that
you can decrypt them again. 

If you think you need access, you please create a new issue with your PGP public key in armoured 
form or [add your GPG public key](https://help.github.com/en/articles/adding-a-new-gpg-key-to-your-github-account) to your GitHub account.
After validation you will be added to the list of blackbox admins and will be able to decrypt the files. 

## Secrets

| file              | comments |
|-------------------|----------|
| `.wskprops_helix` | Adobe I/O Runtime credentials of the `helix` namespace. This namespace is used for all helix global management actions and the _Helix Bot_. |
| `.wskprops_helix-clients` | Adobe Runtime credentials of the `helix-clients` namespace. This namespace is used for managed customers until we are able to easily create per-customer namespaces.

## PGP Primer

### Generate PGP Keys

`gpg --full-generate-key`

see https://help.github.com/articles/generating-a-new-gpg-key/ 


### list all keys in keyring

`gpg --list-keys`, `gpg -k`

#### Example: find helix key

```
$ gpg -k helix
pub   rsa4096 2018-09-22 [SC] [expires: 2022-09-22]
      ECAA07B9AA445682477C0EF4A0DB169C4522D9B9
uid           [ultimate] HelixBot <info@helix-demo.xyz>
sub   rsa4096 2018-09-22 [E] [expires: 2022-09-22]
```

### list all keys in a particular keyring

`gpg --homedir=<homedir> -k`

#### Example: list keys of blackbox users

```
$ gpg --homedir=.blackbox -k
.blackbox/pubring.kbx
---------------------------------------------------------------
pub   rsa4096 2011-11-08 [SC]
      B01CBCA715A4D5B48429951130CF96D22E183FB4
uid           [ unknown] Tobias Bocanegra <tripod@apache.org>
uid           [ unknown] Tobias Bocanegra <tripod@adobe.com>
sub   rsa4096 2011-11-08 [E]

pub   rsa4096 2018-09-22 [SC] [expires: 2022-09-22]
      ECAA07B9AA445682477C0EF4A0DB169C4522D9B9
uid           [ unknown] HelixBot <info@helix-demo.xyz>
sub   rsa4096 2018-09-22 [E] [expires: 2022-09-22]
```

### List the keys used to sign a file

`gpg2 --no-default-keyring --list-only --list-packets < <file>>`

#### Example: list the keys of the .wskprops file

```
$ gpg2 --no-default-keyring --list-only --list-packets < secrets/.wskprops_helix.gpg
gpg: encrypted with 4096-bit RSA key, ID CD4AFF819993FF8A, created 2011-11-08
      "Tobias Bocanegra <tripod@adobe.com>"
```

### Import a GPG Public Key from GitHub

```
curl https://api.github.com/users/<login>/gpg_keys | jq -r .[0].raw_key | gpg --import
```

### Export Public Key

`gpg --export --armor <ID>`

#### Example: export helix's public key

```
gpg --export --armour helix 22D9B9 > helix-pubkey.asc

```

### Export Private Key

`gpg --export-secretkeys --armour <ID>`

#### Example: export helix's private key

```
gpg --export-secret-keys --armour helix 22D9B9 > helix-privkey.asc

```