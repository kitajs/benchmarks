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
* __Node:__ `v20.19.2`
* __Run:__ Mon Jun 30 2025 01:40:53 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.2 | ✗      | 47860.8    | 20.37        | 8.54          |
| polka                    | 0.5.2    | ✓      | 47298.4    | 20.64        | 8.43          |
| fastify                  | 4.29.1   | ✓      | 47069.6    | 20.71        | 8.44          |
| connect                  | 3.7.0    | ✗      | 46853.6    | 20.85        | 8.36          |
| kita                     | 1.1.36   | ✓      | 46601.6    | 20.92        | 8.35          |
| polkadot                 | 1.0.0    | ✗      | 46574.4    | 20.98        | 8.31          |
| rayo                     | 1.4.6    | ✓      | 46420.8    | 21.03        | 8.28          |
| server-base              | 7.1.32   | ✗      | 45887.2    | 21.32        | 8.18          |
| 0http                    | 3.5.3    | ✓      | 45462.4    | 21.50        | 8.11          |
| server-base-router       | 7.1.32   | ✓      | 45432.0    | 21.53        | 8.10          |
| h3                       | 1.15.3   | ✗      | 43556.8    | 22.45        | 7.77          |
| connect-router           | 1.3.8    | ✓      | 43371.2    | 22.51        | 7.73          |
| h3-router                | 1.15.3   | ✓      | 42992.0    | 22.76        | 7.67          |
| restana                  | 4.9.9    | ✓      | 38677.0    | 25.35        | 6.90          |
| hono                     | 4.8.3    | ✓      | 37592.6    | 26.09        | 6.17          |
| koa                      | 2.16.1   | ✗      | 37310.6    | 26.29        | 6.65          |
| take-five                | 2.0.0    | ✓      | 35645.6    | 27.54        | 12.82         |
| restify                  | 11.1.0   | ✓      | 35462.2    | 27.68        | 6.39          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35389.4    | 27.78        | 6.31          |
| koa-router               | 12.0.1   | ✓      | 34158.2    | 28.77        | 6.09          |
| hapi                     | 21.4.0   | ✓      | 31880.0    | 30.86        | 5.68          |
| fastify-big-json         | 4.29.1   | ✓      | 12023.2    | 82.64        | 138.34        |
| express                  | 4.21.2   | ✓      | 11097.0    | 89.53        | 1.98          |
| express-with-middlewares | 4.21.2   | ✓      | 10295.8    | 96.53        | 3.83          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
