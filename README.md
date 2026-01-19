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
* __Node:__ `v20.19.6`
* __Run:__ Mon Jan 19 2026 01:45:02 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.6 | ✗      | 48550.4    | 20.15        | 8.66          |
| polka                    | 0.5.2    | ✓      | 47269.6    | 20.66        | 8.43          |
| kita                     | 1.1.36   | ✓      | 46916.0    | 20.82        | 8.41          |
| rayo                     | 1.4.6    | ✓      | 46527.2    | 20.97        | 8.30          |
| connect                  | 3.7.0    | ✗      | 46480.6    | 21.01        | 8.29          |
| fastify                  | 4.29.1   | ✓      | 46392.8    | 21.04        | 8.32          |
| server-base              | 7.1.32   | ✗      | 45991.2    | 21.22        | 8.20          |
| server-base-router       | 7.1.32   | ✓      | 45949.6    | 21.24        | 8.19          |
| polkadot                 | 1.0.0    | ✗      | 45685.6    | 21.39        | 8.15          |
| 0http                    | 3.5.3    | ✓      | 45601.6    | 21.44        | 8.13          |
| connect-router           | 1.3.8    | ✓      | 43485.6    | 22.49        | 7.76          |
| h3                       | 1.15.5   | ✗      | 43450.4    | 22.52        | 7.75          |
| h3-router                | 1.15.5   | ✓      | 43256.0    | 22.63        | 7.71          |
| restana                  | 4.9.9    | ✓      | 38818.4    | 25.26        | 6.92          |
| hono                     | 4.11.4   | ✓      | 37528.0    | 26.12        | 6.16          |
| koa                      | 2.16.3   | ✗      | 37177.0    | 26.40        | 6.63          |
| take-five                | 2.0.0    | ✓      | 35717.8    | 27.48        | 12.84         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35276.2    | 27.83        | 6.29          |
| restify                  | 11.1.0   | ✓      | 34950.6    | 28.10        | 6.30          |
| koa-router               | 12.0.1   | ✓      | 33497.4    | 29.36        | 5.97          |
| hapi                     | 21.4.4   | ✓      | 31848.0    | 30.90        | 5.68          |
| fastify-big-json         | 4.29.1   | ✓      | 11622.6    | 85.48        | 133.73        |
| express                  | 4.22.1   | ✓      | 11043.8    | 89.94        | 1.97          |
| express-with-middlewares | 4.22.1   | ✓      | 10229.2    | 97.17        | 3.80          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
