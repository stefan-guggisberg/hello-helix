<!--
  ~ Licensed to the Apache Software Foundation (ASF) under one or more
  ~ contributor license agreements.  See the NOTICE file distributed with
  ~ this work for additional information regarding copyright ownership.
  ~ The ASF licenses this file to You under the Apache License, Version 2.0
  ~ (the "License"); you may not use this file except in compliance with
  ~ the License.  You may obtain a copy of the License at
  ~
  ~      http://www.apache.org/licenses/LICENSE-2.0
  ~
  ~ Unless required by applicable law or agreed to in writing, software
  ~ distributed under the License is distributed on an "AS IS" BASIS,
  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  ~ See the License for the specific language governing permissions and
  ~ limitations under the License.
  -->
  
# hello-helix

## Status

[![codecov](https://img.shields.io/codecov/c/github/stefan-guggisberg/hello-helix.svg)](https://codecov.io/gh/stefan-guggisberg/hello-helix)
[![CircleCI](https://img.shields.io/circleci/project/github/stefan-guggisberg/hello-helix.svg)](https://circleci.com/gh/stefan-guggisberg/hello-helix)
[![GitHub license](https://img.shields.io/github/license/stefan-guggisberg/hello-helix.svg)](https://github.com/stefan-guggisberg/hello-helix/blob/master/LICENSE.txt)
[![GitHub issues](https://img.shields.io/github/issues/stefan-guggisberg/hello-helix.svg)](https://github.com/stefan-guggisberg/hello-helix/issues)
[![LGTM Code Quality Grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/stefan-guggisberg/hello-helix.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/stefan-guggisberg/hello-helix)

A Helix demo project.

## Quick Start

To build the project and launch the development server open a shell and enter:

```bash
hlx up
```

A browser will open at http://localhost:3000/.

## Development

### Build

```bash
npm install
```

### Test

```bash
npm test
```

### Lint

```bash
npm run lint
```

### Deployment

Ensure that you have the correct environment variables set in your `.env` script:

```bash
$ source .env
$ printenv  | fgrep HLX_
HLX_WSK_NAMESPACE=helix
HLX_WSK_AUTH=...
HLX_FASTLY_NAMESPACE=...
HLX_FASTLY_AUTH=...
```

If the `.env` shell script is missing, you need to decrypt it first. We're using [BlackBox](https://github.com/StackExchange/blackbox) to encrypt sensitive information in the git repository, e.g. the `.env` file containing API tokens, keys etc. If you are new to [BlackBox](https://github.com/StackExchange/blackbox) follow the [Installation instructions](https://github.com/StackExchange/blackbox#installation-instructions) and refer to the [BlackBox Commands](https://github.com/StackExchange/blackbox#commands).

Once you've added yourself as an admin via `blackbox_addadmin <email address>` (and committed the changes), one of the existing admins will need to re-encrypt the files. Check the list of admins (`blackbox_list_admins`) and contact one of them. Once the admin re-encrypted the files you will be able to run:

```bash
blackbox_decrypt_all_files
```
