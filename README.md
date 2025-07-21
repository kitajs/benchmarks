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
* __Node:__ `v20.19.3`
* __Run:__ Mon Jul 21 2025 01:43:57 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.3 | ✗      | 46177.6    | 21.15        | 8.24          |
| connect                  | 3.7.0    | ✗      | 45621.4    | 21.41        | 8.14          |
| rayo                     | 1.4.6    | ✓      | 45530.4    | 21.46        | 8.12          |
| fastify                  | 4.29.1   | ✓      | 45148.8    | 21.65        | 8.09          |
| kita                     | 1.1.36   | ✓      | 44937.6    | 21.77        | 8.06          |
| server-base-router       | 7.1.32   | ✓      | 44873.6    | 21.79        | 8.00          |
| polka                    | 0.5.2    | ✓      | 44860.8    | 21.80        | 8.00          |
| polkadot                 | 1.0.0    | ✗      | 44477.6    | 21.99        | 7.93          |
| server-base              | 7.1.32   | ✗      | 44065.6    | 22.20        | 7.86          |
| 0http                    | 3.5.3    | ✓      | 43551.2    | 22.47        | 7.77          |
| connect-router           | 1.3.8    | ✓      | 43027.2    | 22.73        | 7.67          |
| h3                       | 1.15.3   | ✗      | 42086.4    | 23.27        | 7.51          |
| h3-router                | 1.15.3   | ✓      | 41052.0    | 23.86        | 7.32          |
| restana                  | 4.9.9    | ✓      | 38555.2    | 25.44        | 6.88          |
| koa                      | 2.16.1   | ✗      | 36742.2    | 26.71        | 6.55          |
| hono                     | 4.8.5    | ✓      | 36184.0    | 27.13        | 5.94          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34655.4    | 28.34        | 6.18          |
| restify                  | 11.1.0   | ✓      | 33970.0    | 28.93        | 6.12          |
| take-five                | 2.0.0    | ✓      | 33666.8    | 29.20        | 12.10         |
| koa-router               | 12.0.1   | ✓      | 33044.2    | 29.76        | 5.89          |
| hapi                     | 21.4.0   | ✓      | 30810.0    | 31.95        | 5.49          |
| fastify-big-json         | 4.29.1   | ✓      | 11877.4    | 83.63        | 136.65        |
| express                  | 4.21.2   | ✓      | 11062.4    | 89.78        | 1.97          |
| express-with-middlewares | 4.21.2   | ✓      | 10294.0    | 96.55        | 3.83          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
