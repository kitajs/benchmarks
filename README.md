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
* __Node:__ `v20.17.0`
* __Run:__ Mon Sep 02 2024 01:24:06 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.17.0 | ✗      | 48025.6    | 20.36        | 8.56          |
| polka                    | 0.5.2    | ✓      | 46516.0    | 21.00        | 8.30          |
| kita                     | 1.1.36   | ✓      | 46146.4    | 21.16        | 8.27          |
| fastify                  | 4.28.1   | ✓      | 45818.4    | 21.32        | 8.21          |
| rayo                     | 1.4.6    | ✓      | 45644.0    | 21.41        | 8.14          |
| connect                  | 3.7.0    | ✗      | 45367.2    | 21.55        | 8.09          |
| server-base-router       | 7.1.32   | ✓      | 44712.8    | 21.87        | 7.97          |
| server-base              | 7.1.32   | ✗      | 44084.0    | 22.19        | 7.86          |
| polkadot                 | 1.0.0    | ✗      | 43502.4    | 22.48        | 7.76          |
| 0http                    | 3.5.3    | ✓      | 43306.4    | 22.59        | 7.72          |
| connect-router           | 1.3.8    | ✓      | 42733.6    | 22.89        | 7.62          |
| h3                       | 1.12.0   | ✗      | 40928.0    | 23.93        | 7.30          |
| hono                     | 4.5.10   | ✓      | 40464.8    | 24.21        | 7.22          |
| h3-router                | 1.12.0   | ✓      | 40307.2    | 24.32        | 7.19          |
| restana                  | 4.9.9    | ✓      | 37837.6    | 25.93        | 6.75          |
| koa                      | 2.15.3   | ✗      | 36492.6    | 26.90        | 6.51          |
| restify                  | 11.1.0   | ✓      | 34594.2    | 28.41        | 6.24          |
| take-five                | 2.0.0    | ✓      | 34507.0    | 28.48        | 12.41         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34016.2    | 28.89        | 6.07          |
| koa-router               | 12.0.1   | ✓      | 33331.2    | 29.49        | 5.94          |
| hapi                     | 21.3.10  | ✓      | 30527.0    | 32.25        | 5.44          |
| fastify-big-json         | 4.28.1   | ✓      | 11904.4    | 83.44        | 136.97        |
| express                  | 4.19.2   | ✓      | 10718.0    | 92.68        | 1.91          |
| express-with-middlewares | 4.19.2   | ✓      | 10135.6    | 98.08        | 3.77          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
