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
* __Run:__ Mon Jun 16 2025 01:38:41 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| h3                       | 1.15.3   | ✗      | 53095.2    | 18.34        | 9.47          |
| bare                     | v20.19.2 | ✗      | 47599.2    | 20.50        | 8.49          |
| kita                     | 1.1.36   | ✓      | 46767.2    | 20.88        | 8.38          |
| polka                    | 0.5.2    | ✓      | 46420.8    | 21.04        | 8.28          |
| connect                  | 3.7.0    | ✗      | 46257.6    | 21.11        | 8.25          |
| server-base              | 7.1.32   | ✗      | 46148.8    | 21.14        | 8.23          |
| 0http                    | 3.5.3    | ✓      | 46088.0    | 21.20        | 8.22          |
| server-base-router       | 7.1.32   | ✓      | 46072.8    | 21.17        | 8.22          |
| fastify                  | 4.29.1   | ✓      | 45881.6    | 21.27        | 8.23          |
| polkadot                 | 1.0.0    | ✗      | 45841.6    | 21.32        | 8.18          |
| rayo                     | 1.4.6    | ✓      | 45744.8    | 21.34        | 8.16          |
| h3-router                | 1.15.3   | ✓      | 44492.8    | 21.98        | 7.93          |
| connect-router           | 1.3.8    | ✓      | 43164.0    | 22.67        | 7.70          |
| restana                  | 4.9.9    | ✓      | 40068.8    | 24.47        | 7.15          |
| hono                     | 4.7.11   | ✓      | 39668.8    | 24.71        | 6.51          |
| koa                      | 2.16.1   | ✗      | 37076.6    | 26.48        | 6.61          |
| take-five                | 2.0.0    | ✓      | 35611.0    | 27.57        | 12.80         |
| restify                  | 11.1.0   | ✓      | 34867.4    | 28.16        | 6.28          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34831.8    | 28.20        | 6.21          |
| koa-router               | 12.0.1   | ✓      | 33622.8    | 29.23        | 6.00          |
| hapi                     | 21.4.0   | ✓      | 32207.2    | 30.55        | 5.74          |
| fastify-big-json         | 4.29.1   | ✓      | 12241.0    | 81.12        | 140.84        |
| express                  | 4.21.2   | ✓      | 11103.8    | 89.48        | 1.98          |
| express-with-middlewares | 4.21.2   | ✓      | 10358.6    | 95.94        | 3.85          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
