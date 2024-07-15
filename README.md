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
* __Node:__ `v20.15.0`
* __Run:__ Mon Jul 15 2024 01:20:59 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.15.0 | ✗      | 47476.0    | 20.57        | 8.47          |
| fastify                  | 4.28.1   | ✓      | 47085.6    | 20.72        | 8.44          |
| polka                    | 0.5.2    | ✓      | 46825.6    | 20.86        | 8.35          |
| polkadot                 | 1.0.0    | ✗      | 46785.6    | 20.88        | 8.34          |
| kita                     | 1.1.36   | ✓      | 46703.2    | 20.92        | 8.37          |
| rayo                     | 1.4.6    | ✓      | 45886.4    | 21.27        | 8.18          |
| 0http                    | 3.5.3    | ✓      | 45409.6    | 21.53        | 8.10          |
| connect                  | 3.7.0    | ✗      | 45382.4    | 21.51        | 8.09          |
| server-base-router       | 7.1.32   | ✓      | 44984.8    | 21.74        | 8.02          |
| server-base              | 7.1.32   | ✗      | 44588.0    | 21.94        | 7.95          |
| connect-router           | 1.3.8    | ✓      | 43122.4    | 22.69        | 7.69          |
| h3                       | 1.12.0   | ✗      | 42146.4    | 23.23        | 7.52          |
| h3-router                | 1.12.0   | ✓      | 40528.8    | 24.17        | 7.23          |
| restana                  | 4.9.9    | ✓      | 40332.2    | 24.29        | 7.19          |
| hono                     | 4.4.13   | ✓      | 40135.2    | 24.41        | 7.16          |
| koa                      | 2.15.3   | ✗      | 36688.6    | 26.76        | 6.54          |
| take-five                | 2.0.0    | ✓      | 34889.8    | 28.17        | 12.54         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34550.6    | 28.45        | 6.16          |
| restify                  | 11.1.0   | ✓      | 34351.8    | 28.60        | 6.19          |
| koa-router               | 12.0.1   | ✓      | 33443.4    | 29.40        | 5.96          |
| hapi                     | 21.3.10  | ✓      | 31405.4    | 31.34        | 5.60          |
| fastify-big-json         | 4.28.1   | ✓      | 11912.6    | 83.39        | 137.07        |
| express                  | 4.19.2   | ✓      | 11094.8    | 89.55        | 1.98          |
| express-with-middlewares | 4.19.2   | ✓      | 10250.6    | 96.97        | 3.81          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
