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
* __Node:__ `v20.20.2`
* __Run:__ Mon Apr 13 2026 02:28:31 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 56021.6    | 17.35        | 9.99          |
| polka                    | 0.5.2    | ✓      | 55284.8    | 17.59        | 9.86          |
| rayo                     | 1.4.6    | ✓      | 55038.4    | 17.67        | 9.82          |
| server-base-router       | 7.1.32   | ✓      | 54811.2    | 17.74        | 9.77          |
| connect                  | 3.7.0    | ✗      | 54690.4    | 17.78        | 9.75          |
| fastify                  | 4.29.1   | ✓      | 54549.6    | 17.84        | 9.78          |
| kita                     | 1.1.36   | ✓      | 54411.2    | 17.88        | 9.76          |
| server-base              | 7.1.32   | ✗      | 54039.2    | 18.01        | 9.64          |
| connect-router           | 1.3.8    | ✓      | 52543.2    | 18.54        | 9.37          |
| polkadot                 | 1.0.0    | ✗      | 47407.2    | 20.59        | 8.45          |
| 0http                    | 3.5.3    | ✓      | 46132.8    | 21.19        | 8.23          |
| hono                     | 4.12.12  | ✓      | 45226.4    | 21.61        | 7.42          |
| koa                      | 2.16.4   | ✗      | 44482.4    | 21.98        | 7.93          |
| restana                  | 4.9.9    | ✓      | 43851.2    | 22.31        | 7.82          |
| take-five                | 2.0.0    | ✓      | 43554.4    | 22.46        | 15.66         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 41884.0    | 23.38        | 7.47          |
| koa-router               | 12.0.1   | ✓      | 41741.6    | 23.45        | 7.44          |
| restify                  | 11.1.0   | ✓      | 41655.2    | 23.50        | 7.51          |
| h3-router                | 1.15.11  | ✓      | 41427.2    | 23.64        | 7.39          |
| h3                       | 1.15.11  | ✗      | 40888.8    | 23.95        | 7.29          |
| hapi                     | 21.4.8   | ✓      | 37789.6    | 25.97        | 6.74          |
| express                  | 4.22.1   | ✓      | 12920.0    | 76.82        | 2.30          |
| express-with-middlewares | 4.22.1   | ✓      | 12474.2    | 79.60        | 4.64          |
| fastify-big-json         | 4.29.1   | ✓      | 11723.8    | 84.73        | 134.89        |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
