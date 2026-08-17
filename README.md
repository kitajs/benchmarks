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
* __Run:__ Mon Aug 17 2026 01:19:04 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| rayo                     | 1.4.6    | ✓      | 46604.0    | 20.95        | 8.31          |
| polka                    | 0.5.2    | ✓      | 46560.0    | 20.98        | 8.30          |
| kita                     | 1.1.36   | ✓      | 46268.0    | 21.11        | 8.30          |
| fastify                  | 4.29.1   | ✓      | 45670.4    | 21.40        | 8.19          |
| bare                     | v20.20.2 | ✗      | 45179.2    | 21.64        | 8.06          |
| server-base              | 7.1.32   | ✗      | 44952.0    | 21.75        | 8.02          |
| server-base-router       | 7.1.32   | ✓      | 44697.6    | 21.88        | 7.97          |
| connect                  | 3.7.0    | ✗      | 44136.0    | 22.16        | 7.87          |
| polkadot                 | 1.0.0    | ✗      | 43249.6    | 22.62        | 7.71          |
| 0http                    | 3.5.3    | ✓      | 42068.0    | 23.28        | 7.50          |
| connect-router           | 1.3.8    | ✓      | 42015.2    | 23.30        | 7.49          |
| h3                       | 1.15.11  | ✗      | 39908.0    | 24.56        | 7.12          |
| hono                     | 4.13.2   | ✓      | 38928.0    | 25.19        | 6.39          |
| h3-router                | 1.15.11  | ✓      | 38807.2    | 25.27        | 6.92          |
| restana                  | 4.9.9    | ✓      | 38657.6    | 25.37        | 6.89          |
| koa                      | 2.16.4   | ✗      | 35777.0    | 27.45        | 6.38          |
| take-five                | 2.0.0    | ✓      | 34228.0    | 28.71        | 12.31         |
| restify                  | 11.1.0   | ✓      | 33874.8    | 29.02        | 6.11          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33818.4    | 29.06        | 6.03          |
| koa-router               | 12.0.1   | ✓      | 31885.2    | 30.85        | 5.69          |
| hapi                     | 21.4.10  | ✓      | 31294.2    | 31.45        | 5.58          |
| fastify-big-json         | 4.29.1   | ✓      | 11474.6    | 86.58        | 132.02        |
| express                  | 4.22.2   | ✓      | 10867.9    | 91.44        | 1.94          |
| express-with-middlewares | 4.22.2   | ✓      | 9773.1     | 101.73       | 3.63          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
