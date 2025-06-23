<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.2`
* __Run:__ Mon Jun 23 2025 01:40:48 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.2 | ✗      | 42348.8    | 23.11        | 7.55          |
| rayo                     | 1.4.6    | ✓      | 39942.4    | 24.53        | 7.12          |
| connect                  | 3.7.0    | ✗      | 39660.8    | 24.71        | 7.07          |
| server-base              | 7.1.32   | ✗      | 39171.2    | 25.03        | 6.99          |
| server-base-router       | 7.1.32   | ✓      | 39129.6    | 25.06        | 6.98          |
| polka                    | 0.5.2    | ✓      | 38917.8    | 25.19        | 6.94          |
| fastify                  | 4.29.1   | ✓      | 38901.6    | 25.21        | 6.97          |
| kita                     | 1.1.36   | ✓      | 38168.0    | 25.70        | 6.84          |
| connect-router           | 1.3.8    | ✓      | 36663.4    | 26.77        | 6.54          |
| 0http                    | 3.5.3    | ✓      | 36623.2    | 26.81        | 6.53          |
| polkadot                 | 1.0.0    | ✗      | 35323.0    | 27.81        | 6.30          |
| h3                       | 1.15.3   | ✗      | 31536.4    | 31.20        | 5.62          |
| hono                     | 4.8.2    | ✓      | 31338.0    | 31.41        | 5.14          |
| koa                      | 2.16.1   | ✗      | 31024.8    | 31.73        | 5.53          |
| take-five                | 2.0.0    | ✓      | 29927.6    | 32.91        | 10.76         |
| restana                  | 4.9.9    | ✓      | 29862.0    | 32.99        | 5.33          |
| h3-router                | 1.15.3   | ✓      | 29791.2    | 33.07        | 5.31          |
| restify                  | 11.1.0   | ✓      | 29103.2    | 33.85        | 5.25          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 28962.8    | 34.02        | 5.16          |
| koa-router               | 12.0.1   | ✓      | 27237.6    | 36.20        | 4.86          |
| hapi                     | 21.4.0   | ✓      | 24474.0    | 40.34        | 4.36          |
| fastify-big-json         | 4.29.1   | ✓      | 9962.0     | 99.82        | 114.61        |
| express                  | 4.21.2   | ✓      | 9685.1     | 102.61       | 1.73          |
| express-with-middlewares | 4.21.2   | ✓      | 8948.4     | 111.11       | 3.33          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
