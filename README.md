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
* __Run:__ Mon Jul 01 2024 01:24:16 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 4.28.1   | ✓      | 44414.4    | 22.02        | 7.96          |
| bare                     | v20.15.0 | ✗      | 44236.8    | 22.11        | 7.89          |
| connect                  | 3.7.0    | ✗      | 44152.8    | 22.16        | 7.87          |
| kita                     | 1.1.36   | ✓      | 43373.6    | 22.55        | 7.78          |
| polka                    | 0.5.2    | ✓      | 43325.6    | 22.58        | 7.73          |
| rayo                     | 1.4.6    | ✓      | 43270.4    | 22.61        | 7.72          |
| server-base-router       | 7.1.32   | ✓      | 43050.4    | 22.73        | 7.68          |
| server-base              | 7.1.32   | ✗      | 42637.6    | 22.95        | 7.60          |
| polkadot                 | 1.0.0    | ✗      | 42084.8    | 23.26        | 7.51          |
| connect-router           | 1.3.8    | ✓      | 40331.2    | 24.29        | 7.19          |
| 0http                    | 3.5.3    | ✓      | 39940.0    | 24.55        | 7.12          |
| hono                     | 4.4.10   | ✓      | 37747.8    | 25.99        | 6.73          |
| h3-router                | 1.12.0   | ✓      | 37268.8    | 26.33        | 6.65          |
| h3                       | 1.12.0   | ✗      | 37255.2    | 26.35        | 6.64          |
| restana                  | 4.9.9    | ✓      | 34523.0    | 28.46        | 6.16          |
| koa                      | 2.15.3   | ✗      | 34508.2    | 28.47        | 6.15          |
| take-five                | 2.0.0    | ✓      | 33799.6    | 29.08        | 12.15         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 32985.0    | 29.83        | 5.88          |
| restify                  | 11.1.0   | ✓      | 32571.6    | 30.19        | 5.87          |
| koa-router               | 12.0.1   | ✓      | 32094.8    | 30.65        | 5.72          |
| hapi                     | 21.3.10  | ✓      | 30364.0    | 32.43        | 5.41          |
| fastify-big-json         | 4.28.1   | ✓      | 11528.6    | 86.15        | 132.64        |
| express                  | 4.19.2   | ✓      | 10683.2    | 92.97        | 1.91          |
| express-with-middlewares | 4.19.2   | ✓      | 9922.1     | 100.16       | 3.69          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
