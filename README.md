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
* __Node:__ `v20.14.0`
* __Run:__ Mon Jun 17 2024 01:19:44 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| kita                     | 1.1.36   | ✓      | 45684.8    | 21.37        | 8.19          |
| bare                     | v20.14.0 | ✗      | 45321.6    | 21.57        | 8.08          |
| fastify                  | 4.28.0   | ✓      | 45164.8    | 21.65        | 8.10          |
| polkadot                 | 1.0.0    | ✗      | 45145.6    | 21.66        | 8.05          |
| polka                    | 0.5.2    | ✓      | 44812.8    | 21.81        | 7.99          |
| connect                  | 3.7.0    | ✗      | 44590.4    | 21.92        | 7.95          |
| rayo                     | 1.4.6    | ✓      | 44296.0    | 22.08        | 7.90          |
| 0http                    | 3.5.3    | ✓      | 43737.6    | 22.36        | 7.80          |
| server-base-router       | 7.1.32   | ✓      | 43608.0    | 22.43        | 7.78          |
| server-base              | 7.1.32   | ✗      | 43284.8    | 22.60        | 7.72          |
| h3                       | 1.11.1   | ✗      | 41874.4    | 23.38        | 7.47          |
| connect-router           | 1.3.8    | ✓      | 41570.4    | 23.56        | 7.41          |
| h3-router                | 1.11.1   | ✓      | 40330.4    | 24.29        | 7.19          |
| hono                     | 4.4.6    | ✓      | 38919.2    | 25.20        | 6.94          |
| restana                  | 4.9.9    | ✓      | 37436.2    | 26.21        | 6.68          |
| koa                      | 2.15.3   | ✗      | 35668.6    | 27.54        | 6.36          |
| take-five                | 2.0.0    | ✓      | 35032.2    | 28.04        | 12.59         |
| restify                  | 11.1.0   | ✓      | 33515.0    | 29.33        | 6.04          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33455.8    | 29.38        | 5.97          |
| koa-router               | 12.0.1   | ✓      | 32357.0    | 30.39        | 5.77          |
| hapi                     | 21.3.10  | ✓      | 30602.0    | 32.16        | 5.46          |
| fastify-big-json         | 4.28.0   | ✓      | 11526.8    | 86.19        | 132.61        |
| express                  | 4.19.2   | ✓      | 10637.6    | 93.38        | 1.90          |
| express-with-middlewares | 4.19.2   | ✓      | 9945.0     | 99.95        | 3.70          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
