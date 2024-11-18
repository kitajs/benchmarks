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
* __Node:__ `v20.18.0`
* __Run:__ Mon Nov 18 2024 01:31:24 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.0 | ✗      | 47505.6    | 20.53        | 8.47          |
| kita                     | 1.1.36   | ✓      | 47056.8    | 20.74        | 8.44          |
| polka                    | 0.5.2    | ✓      | 46568.0    | 20.98        | 8.31          |
| rayo                     | 1.4.6    | ✓      | 46300.8    | 21.10        | 8.26          |
| fastify                  | 4.28.1   | ✓      | 46145.6    | 21.15        | 8.27          |
| polkadot                 | 1.0.0    | ✗      | 45902.4    | 21.29        | 8.19          |
| connect                  | 3.7.0    | ✗      | 45856.8    | 21.29        | 8.18          |
| 0http                    | 3.5.3    | ✓      | 45728.0    | 21.38        | 8.15          |
| server-base              | 7.1.32   | ✗      | 45632.0    | 21.40        | 8.14          |
| server-base-router       | 7.1.32   | ✓      | 45380.0    | 21.56        | 8.09          |
| connect-router           | 1.3.8    | ✓      | 42902.4    | 22.81        | 7.65          |
| hono                     | 4.6.10   | ✓      | 40724.0    | 24.06        | 7.26          |
| h3                       | 1.13.0   | ✗      | 40299.2    | 24.31        | 7.19          |
| h3-router                | 1.13.0   | ✓      | 39041.8    | 25.11        | 6.96          |
| koa                      | 2.15.3   | ✗      | 37341.6    | 26.29        | 6.66          |
| restana                  | 4.9.9    | ✓      | 36644.0    | 26.79        | 6.53          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35525.8    | 27.68        | 6.34          |
| take-five                | 2.0.0    | ✓      | 35410.2    | 27.74        | 12.73         |
| restify                  | 11.1.0   | ✓      | 35092.6    | 28.02        | 6.33          |
| koa-router               | 12.0.1   | ✓      | 33294.0    | 29.54        | 5.94          |
| hapi                     | 21.3.12  | ✓      | 30416.4    | 32.38        | 5.42          |
| fastify-big-json         | 4.28.1   | ✓      | 11797.4    | 84.20        | 135.75        |
| express                  | 4.21.1   | ✓      | 10687.6    | 92.98        | 1.91          |
| express-with-middlewares | 4.21.1   | ✓      | 9990.2     | 99.50        | 3.72          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
