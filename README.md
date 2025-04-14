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
* __Node:__ `v20.19.0`
* __Run:__ Mon Apr 14 2025 01:35:13 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polka                    | 0.5.2    | ✓      | 46734.4    | 20.90        | 8.33          |
| bare                     | v20.19.0 | ✗      | 46645.6    | 20.93        | 8.32          |
| server-base-router       | 7.1.32   | ✓      | 46508.0    | 20.99        | 8.29          |
| rayo                     | 1.4.6    | ✓      | 46312.8    | 21.08        | 8.26          |
| connect                  | 3.7.0    | ✗      | 45895.2    | 21.29        | 8.18          |
| server-base              | 7.1.32   | ✗      | 45733.6    | 21.36        | 8.16          |
| polkadot                 | 1.0.0    | ✗      | 45636.0    | 21.42        | 8.14          |
| kita                     | 1.1.36   | ✓      | 45623.2    | 21.41        | 8.18          |
| fastify                  | 4.29.0   | ✓      | 45211.2    | 21.62        | 8.11          |
| 0http                    | 3.5.3    | ✓      | 44297.6    | 22.07        | 7.90          |
| connect-router           | 1.3.8    | ✓      | 43081.6    | 22.71        | 7.68          |
| h3                       | 1.15.1   | ✗      | 40544.0    | 24.17        | 7.23          |
| restana                  | 4.9.9    | ✓      | 39962.4    | 24.53        | 7.13          |
| h3-router                | 1.15.1   | ✓      | 39425.6    | 24.87        | 7.03          |
| hono                     | 4.7.6    | ✓      | 39329.6    | 24.91        | 6.45          |
| koa                      | 2.16.1   | ✗      | 36409.6    | 26.97        | 6.49          |
| restify                  | 11.1.0   | ✓      | 35965.4    | 27.30        | 6.48          |
| take-five                | 2.0.0    | ✓      | 35677.8    | 27.54        | 12.83         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35215.0    | 27.88        | 6.28          |
| koa-router               | 12.0.1   | ✓      | 33298.8    | 29.52        | 5.94          |
| hapi                     | 21.4.0   | ✓      | 31134.0    | 31.61        | 5.55          |
| fastify-big-json         | 4.29.0   | ✓      | 11469.2    | 86.59        | 131.96        |
| express                  | 4.21.2   | ✓      | 10946.2    | 90.74        | 1.95          |
| express-with-middlewares | 4.21.2   | ✓      | 10184.0    | 97.61        | 3.79          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
