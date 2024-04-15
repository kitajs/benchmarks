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
* __Node:__ `v20.12.1`
* __Run:__ Mon Apr 15 2024 03:44:36 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| kita                     | 1.1.36   | ✓      | 46352.8    | 21.07        | 8.31          |
| bare                     | v20.12.1 | ✗      | 46087.2    | 21.19        | 8.22          |
| fastify                  | 4.26.2   | ✓      | 46074.4    | 21.20        | 8.26          |
| polka                    | 0.5.2    | ✓      | 45676.0    | 21.39        | 8.15          |
| 0http                    | 3.5.3    | ✓      | 45572.8    | 21.44        | 8.13          |
| connect                  | 3.7.0    | ✗      | 45421.6    | 21.50        | 8.10          |
| rayo                     | 1.4.6    | ✓      | 45054.4    | 21.70        | 8.04          |
| server-base              | 7.1.32   | ✗      | 44887.2    | 21.78        | 8.01          |
| polkadot                 | 1.0.0    | ✗      | 44344.8    | 22.06        | 7.91          |
| server-base-router       | 7.1.32   | ✓      | 44239.2    | 22.11        | 7.89          |
| h3                       | 1.11.1   | ✗      | 43000.8    | 22.75        | 7.67          |
| h3-router                | 1.11.1   | ✓      | 42796.0    | 22.87        | 7.63          |
| connect-router           | 1.3.8    | ✓      | 42720.0    | 22.90        | 7.62          |
| hono                     | 4.2.4    | ✓      | 41140.8    | 23.81        | 7.34          |
| restana                  | 4.9.9    | ✓      | 39208.0    | 25.01        | 6.99          |
| koa                      | 2.15.3   | ✗      | 35873.4    | 27.37        | 6.40          |
| take-five                | 2.0.0    | ✓      | 34573.4    | 28.44        | 12.43         |
| restify                  | 11.1.0   | ✓      | 34296.6    | 28.65        | 6.18          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33795.8    | 29.09        | 6.03          |
| koa-router               | 12.0.1   | ✓      | 32600.2    | 30.16        | 5.81          |
| hapi                     | 21.3.9   | ✓      | 31515.6    | 31.24        | 5.62          |
| fastify-big-json         | 4.26.2   | ✓      | 11843.4    | 83.89        | 136.25        |
| express                  | 4.19.2   | ✓      | 10481.6    | 94.83        | 1.87          |
| express-with-middlewares | 4.19.2   | ✓      | 10212.6    | 97.31        | 3.80          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
