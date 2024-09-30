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
* __Node:__ `v20.17.0`
* __Run:__ Mon Sep 30 2024 01:29:05 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polka                    | 0.5.2    | ✓      | 47311.2    | 20.64        | 8.44          |
| kita                     | 1.1.36   | ✓      | 46871.2    | 20.83        | 8.40          |
| fastify                  | 4.28.1   | ✓      | 46603.2    | 20.95        | 8.36          |
| bare                     | v20.17.0 | ✗      | 46600.8    | 20.95        | 8.31          |
| connect                  | 3.7.0    | ✗      | 46054.2    | 21.21        | 8.21          |
| server-base              | 7.1.32   | ✗      | 45545.6    | 21.45        | 8.12          |
| rayo                     | 1.4.6    | ✓      | 45292.8    | 21.58        | 8.08          |
| polkadot                 | 1.0.0    | ✗      | 45201.6    | 21.62        | 8.06          |
| server-base-router       | 7.1.32   | ✓      | 45076.0    | 21.69        | 8.04          |
| 0http                    | 3.5.3    | ✓      | 43258.4    | 22.62        | 7.71          |
| connect-router           | 1.3.8    | ✓      | 42981.6    | 22.74        | 7.66          |
| h3-router                | 1.12.0   | ✓      | 42018.4    | 23.30        | 7.49          |
| h3                       | 1.12.0   | ✗      | 41054.4    | 23.85        | 7.32          |
| hono                     | 4.6.3    | ✓      | 40280.0    | 24.30        | 7.18          |
| restana                  | 4.9.9    | ✓      | 39534.2    | 24.80        | 7.05          |
| koa                      | 2.15.3   | ✗      | 35905.8    | 27.35        | 6.40          |
| take-five                | 2.0.0    | ✓      | 35460.2    | 27.71        | 12.75         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34921.2    | 28.13        | 6.23          |
| restify                  | 11.1.0   | ✓      | 34518.0    | 28.47        | 6.22          |
| koa-router               | 12.0.1   | ✓      | 32469.2    | 30.29        | 5.79          |
| hapi                     | 21.3.10  | ✓      | 31694.6    | 31.04        | 5.65          |
| fastify-big-json         | 4.28.1   | ✓      | 11713.0    | 84.79        | 134.76        |
| express                  | 4.21.0   | ✓      | 10954.2    | 90.70        | 1.95          |
| express-with-middlewares | 4.21.0   | ✓      | 10331.6    | 96.18        | 3.84          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
