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
* __Run:__ Mon Jun 09 2025 01:39:39 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.2 | ✗      | 46808.0    | 20.86        | 8.35          |
| fastify                  | 4.29.1   | ✓      | 46612.0    | 20.95        | 8.36          |
| kita                     | 1.1.36   | ✓      | 45973.6    | 21.25        | 8.24          |
| rayo                     | 1.4.6    | ✓      | 45739.2    | 21.36        | 8.16          |
| connect                  | 3.7.0    | ✗      | 45364.0    | 21.54        | 8.09          |
| server-base              | 7.1.32   | ✗      | 45088.0    | 21.69        | 8.04          |
| polka                    | 0.5.2    | ✓      | 44606.4    | 21.93        | 7.95          |
| server-base-router       | 7.1.32   | ✓      | 44559.2    | 21.95        | 7.95          |
| polkadot                 | 1.0.0    | ✗      | 43469.6    | 22.51        | 7.75          |
| 0http                    | 3.5.3    | ✓      | 42388.8    | 23.09        | 7.56          |
| connect-router           | 1.3.8    | ✓      | 41868.0    | 23.39        | 7.47          |
| h3                       | 1.15.3   | ✗      | 41753.6    | 23.46        | 7.45          |
| h3-router                | 1.15.3   | ✓      | 41394.4    | 23.66        | 7.38          |
| hono                     | 4.7.11   | ✓      | 38907.2    | 25.20        | 6.38          |
| restana                  | 4.9.9    | ✓      | 37698.6    | 26.03        | 6.72          |
| koa                      | 2.16.1   | ✗      | 36431.4    | 26.94        | 6.50          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34463.6    | 28.51        | 6.15          |
| restify                  | 11.1.0   | ✓      | 34422.2    | 28.54        | 6.20          |
| take-five                | 2.0.0    | ✓      | 34392.8    | 28.57        | 12.37         |
| koa-router               | 12.0.1   | ✓      | 32264.4    | 30.49        | 5.75          |
| hapi                     | 21.4.0   | ✓      | 30850.8    | 31.91        | 5.50          |
| fastify-big-json         | 4.29.1   | ✓      | 12089.8    | 82.17        | 139.11        |
| express                  | 4.21.2   | ✓      | 10824.6    | 91.81        | 1.93          |
| express-with-middlewares | 4.21.2   | ✓      | 9936.3     | 100.04       | 3.70          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
