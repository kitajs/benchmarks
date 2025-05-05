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
* __Node:__ `v20.19.1`
* __Run:__ Mon May 05 2025 01:36:58 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.1 | ✗      | 47360.0    | 20.62        | 8.45          |
| polka                    | 0.5.2    | ✓      | 46482.4    | 21.02        | 8.29          |
| fastify                  | 4.29.1   | ✓      | 46019.2    | 21.22        | 8.25          |
| connect                  | 3.7.0    | ✗      | 45884.0    | 21.29        | 8.18          |
| rayo                     | 1.4.6    | ✓      | 45720.0    | 21.37        | 8.15          |
| kita                     | 1.1.36   | ✓      | 45560.8    | 21.45        | 8.17          |
| server-base              | 7.1.32   | ✗      | 45131.2    | 21.67        | 8.05          |
| server-base-router       | 7.1.32   | ✓      | 45096.8    | 21.67        | 8.04          |
| polkadot                 | 1.0.0    | ✗      | 44756.0    | 21.85        | 7.98          |
| 0http                    | 3.5.3    | ✓      | 44331.2    | 22.07        | 7.91          |
| connect-router           | 1.3.8    | ✓      | 42910.4    | 22.80        | 7.65          |
| h3                       | 1.15.3   | ✗      | 42551.2    | 23.00        | 7.59          |
| h3-router                | 1.15.3   | ✓      | 41531.2    | 23.57        | 7.41          |
| hono                     | 4.7.8    | ✓      | 39233.6    | 24.99        | 6.44          |
| restana                  | 4.9.9    | ✓      | 38928.6    | 25.19        | 6.94          |
| koa                      | 2.16.1   | ✗      | 35917.8    | 27.33        | 6.41          |
| take-five                | 2.0.0    | ✓      | 34939.0    | 28.14        | 12.56         |
| restify                  | 11.1.0   | ✓      | 34295.0    | 28.67        | 6.18          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34100.2    | 28.83        | 6.08          |
| koa-router               | 12.0.1   | ✓      | 32204.4    | 30.55        | 5.74          |
| hapi                     | 21.4.0   | ✓      | 31425.4    | 31.32        | 5.60          |
| fastify-big-json         | 4.29.1   | ✓      | 11511.6    | 86.31        | 132.43        |
| express                  | 4.21.2   | ✓      | 10674.6    | 93.10        | 1.90          |
| express-with-middlewares | 4.21.2   | ✓      | 9839.0     | 101.02       | 3.66          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
