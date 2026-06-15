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
* __Run:__ Mon Jun 15 2026 03:25:56 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 56571.2    | 17.17        | 10.09         |
| connect                  | 3.7.0    | ✗      | 56487.2    | 17.20        | 10.07         |
| server-base-router       | 7.1.32   | ✓      | 55713.6    | 17.43        | 9.93          |
| polka                    | 0.5.2    | ✓      | 55584.8    | 17.48        | 9.91          |
| server-base              | 7.1.32   | ✗      | 55340.8    | 17.57        | 9.87          |
| kita                     | 1.1.36   | ✓      | 55287.2    | 17.58        | 9.91          |
| rayo                     | 1.4.6    | ✓      | 55223.2    | 17.61        | 9.85          |
| fastify                  | 4.29.1   | ✓      | 54866.4    | 17.74        | 9.84          |
| connect-router           | 1.3.8    | ✓      | 53727.2    | 18.12        | 9.58          |
| polkadot                 | 1.0.0    | ✗      | 48640.0    | 20.06        | 8.67          |
| 0http                    | 3.5.3    | ✓      | 48524.8    | 20.11        | 8.65          |
| h3-router                | 1.15.11  | ✓      | 46100.8    | 21.19        | 8.22          |
| restana                  | 4.9.9    | ✓      | 45905.6    | 21.29        | 8.19          |
| hono                     | 4.12.25  | ✓      | 45868.8    | 21.30        | 7.52          |
| koa                      | 2.16.4   | ✗      | 44836.0    | 21.80        | 8.00          |
| h3                       | 1.15.11  | ✗      | 44155.2    | 22.16        | 7.87          |
| take-five                | 2.0.0    | ✓      | 43760.0    | 22.35        | 15.73         |
| restify                  | 11.1.0   | ✓      | 42168.8    | 23.21        | 7.60          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 42096.8    | 23.25        | 7.51          |
| koa-router               | 12.0.1   | ✓      | 40232.8    | 24.36        | 7.17          |
| hapi                     | 21.4.9   | ✓      | 37894.4    | 25.89        | 6.76          |
| express                  | 4.22.2   | ✓      | 13428.4    | 73.91        | 2.39          |
| express-with-middlewares | 4.22.2   | ✓      | 12483.8    | 79.52        | 4.64          |
| fastify-big-json         | 4.29.1   | ✓      | 11739.4    | 84.61        | 135.08        |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
