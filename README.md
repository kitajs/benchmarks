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
* __Node:__ `v20.20.2`
* __Run:__ Mon Jun 29 2026 03:14:13 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 46466.4    | 21.01        | 8.29          |
| polka                    | 0.5.2    | ✓      | 45500.0    | 21.48        | 8.11          |
| fastify                  | 4.29.1   | ✓      | 45408.8    | 21.53        | 8.14          |
| kita                     | 1.1.36   | ✓      | 45164.8    | 21.64        | 8.10          |
| rayo                     | 1.4.6    | ✓      | 44850.4    | 21.80        | 8.00          |
| server-base              | 7.1.32   | ✗      | 44756.0    | 21.85        | 7.98          |
| server-base-router       | 7.1.32   | ✓      | 44348.0    | 22.05        | 7.91          |
| connect                  | 3.7.0    | ✗      | 44248.0    | 22.10        | 7.89          |
| polkadot                 | 1.0.0    | ✗      | 42642.4    | 22.96        | 7.60          |
| 0http                    | 3.5.3    | ✓      | 42020.0    | 23.30        | 7.49          |
| connect-router           | 1.3.8    | ✓      | 41909.6    | 23.37        | 7.47          |
| h3                       | 1.15.11  | ✗      | 39609.6    | 24.75        | 7.06          |
| h3-router                | 1.15.11  | ✓      | 39048.8    | 25.11        | 6.96          |
| restana                  | 4.9.9    | ✓      | 38465.6    | 25.50        | 6.86          |
| koa                      | 2.16.4   | ✗      | 36803.0    | 26.66        | 6.56          |
| hono                     | 4.12.27  | ✓      | 35037.0    | 28.04        | 5.75          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34507.0    | 28.49        | 6.15          |
| restify                  | 11.1.0   | ✓      | 34337.0    | 28.62        | 6.19          |
| take-five                | 2.0.0    | ✓      | 33821.2    | 29.06        | 12.16         |
| koa-router               | 12.0.1   | ✓      | 32338.6    | 30.42        | 5.77          |
| hapi                     | 21.4.9   | ✓      | 31465.8    | 31.27        | 5.61          |
| fastify-big-json         | 4.29.1   | ✓      | 11595.6    | 85.67        | 133.42        |
| express                  | 4.22.2   | ✓      | 10742.4    | 92.51        | 1.92          |
| express-with-middlewares | 4.22.2   | ✓      | 10185.5    | 97.58        | 3.79          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
