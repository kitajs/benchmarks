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
* __Node:__ `v20.19.4`
* __Run:__ Mon Aug 11 2025 01:42:56 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.4 | ✗      | 47554.4    | 20.54        | 8.48          |
| kita                     | 1.1.36   | ✓      | 47064.8    | 20.72        | 8.44          |
| polka                    | 0.5.2    | ✓      | 46802.4    | 20.87        | 8.35          |
| fastify                  | 4.29.1   | ✓      | 46264.0    | 21.11        | 8.29          |
| 0http                    | 3.5.3    | ✓      | 46028.8    | 21.23        | 8.21          |
| connect                  | 3.7.0    | ✗      | 45857.6    | 21.28        | 8.18          |
| polkadot                 | 1.0.0    | ✗      | 45672.8    | 21.39        | 8.15          |
| server-base              | 7.1.32   | ✗      | 45423.2    | 21.53        | 8.10          |
| rayo                     | 1.4.6    | ✓      | 45293.6    | 21.60        | 8.08          |
| server-base-router       | 7.1.32   | ✓      | 45078.4    | 21.67        | 8.04          |
| h3                       | 1.15.4   | ✗      | 44296.0    | 22.08        | 7.90          |
| connect-router           | 1.3.8    | ✓      | 43443.2    | 22.49        | 7.75          |
| h3-router                | 1.15.4   | ✓      | 43319.2    | 22.58        | 7.73          |
| hono                     | 4.9.0    | ✓      | 37633.6    | 26.11        | 6.17          |
| koa                      | 2.16.2   | ✗      | 37467.8    | 26.17        | 6.68          |
| restana                  | 4.9.9    | ✓      | 37243.0    | 26.36        | 6.64          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35647.4    | 27.54        | 6.36          |
| restify                  | 11.1.0   | ✓      | 35408.6    | 27.74        | 6.38          |
| take-five                | 2.0.0    | ✓      | 35225.4    | 27.89        | 12.66         |
| koa-router               | 12.0.1   | ✓      | 33162.2    | 29.65        | 5.91          |
| hapi                     | 21.4.2   | ✓      | 32027.6    | 30.72        | 5.71          |
| fastify-big-json         | 4.29.1   | ✓      | 11806.6    | 84.14        | 135.85        |
| express                  | 4.21.2   | ✓      | 10965.4    | 90.61        | 1.96          |
| express-with-middlewares | 4.21.2   | ✓      | 10370.6    | 95.84        | 3.86          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
